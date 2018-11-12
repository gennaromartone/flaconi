import React, { Component } from 'react';

//import FilterMenu from './FilterMenu';
import Pagination from './../presentationals/Pagination';
import FilterMenu from './../presentationals/FilterMenu';
import Box from './../presentationals/Box';
import {getData} from './../data/data';

class Content extends Component {
      
  constructor(props){
    super(props);

    this.state = {
      productArray: [],
      brandName:[],
      total:2,
      currentPage:1,
      isLoading: false,
      error: null
    }

    this.defaultNumbeToFetch = 15;
    this.brandNameFilter = this.brandNameFilter.bind(this);
    this.setShowFlag = this.setShowFlag.bind(this);
    this.onChangepage = this.onChangepage.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  // this method provide the props for the Pagination Component 
  // and provide to fetch data every page changed
  onChangepage(event){

    let arrow = event.target.id;
    let page = this.state.currentPage;
    let numberForpage = this.defaultNumbeToFetch;
    let from,to = 0;
        
    switch (arrow) {
      case 'back':
        if( page == 1)
          return false;
        else{
          from = ((page-1)*numberForpage)-numberForpage;
          to = (page-1)*numberForpage;
          this.fetchData(from,to );
          page--;
          this.setState({currentPage:page})
        }
        break;

      case 'fwd':
        if( page == this.state.total)
          return false;
        else{
          from = ((page+1)*numberForpage)-numberForpage;
          to = (page+1)*numberForpage;
          this.fetchData(from,to);
          page++;
          this.setState({currentPage:page})
        }
        break;
    
      default:
        return false;
        
    }


  }

  // this method return an array with the type of products to return in the filter menu
  brandNameFilter(value) {
    // return array with info on show
    let brandName = []
    try {
      brandName = value.map(val => {
        //return {type: val.type, checked:false}
        return val.type;
      }).filter((elem, index, self) => {
        return index == self.indexOf(elem)
      }).map(val => {
        return { type: val, checked: false }
      })
    }
    catch (err) {
      brandName = [];
      this.setState({ error, isLoading: false })
    } finally {
      this.setState({ brandName })
    }
    
  }

  // this method set what products to show when the user click on the filter menu
  setShowFlag(event, arrProduct) {
    let newArr = [];
    let newArrBrand = [];
    try {
      // filter case

      let type = event.target.attributes[0].value;
      let checked = event.target.checked;

      // set what to see and what no
      newArr = this.state.productArray.map((val) => {

        if (checked == false)
          val.show = true;
        else {
          if (val.type == type)
            val.show = true;
          else
            val.show = false;
        }

        return val;
      });

      // set filter with checked value
      newArrBrand = this.state.brandName.map(arr => {

        if (checked == false)
          arr.checked = false;
        else {

          if (arr.type.indexOf(type) != -1)
            arr.checked = checked;
          else
            arr.checked = false;
        }
        return arr;
      })
    }
    catch (err) {
      newArrBrand = [];
      newArr = [];
      this.setState({ error, isLoading: false })
    } finally {
      this.setState({ brandName: newArrBrand })
      this.setState({ productArray: newArr })

    }

  }

  // fetching data products,format the price and add the flag show for each products
  fetchData(from, to) {
    this.setState({ isLoading: true });
    // HERE WE CAN CREATE A SPINNER ON THE PAGE,GRID OR ON EACH BOX TO LOAD.
    // get data 
    getData(from, to)
      .then(result => {
        let newArr = result.map(val => {

          val.price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.price/100)
          val['show'] = true;
          return val;
        })

        return newArr;

      })
      .then(result => {
        this.setState({ productArray: result, isLoading: false })
        this.brandNameFilter(result)
      })
      .catch(error =>
        this.setState({ error, isLoading: false })
      )
  }
  
  componentDidMount() {
    this.fetchData(0,this.defaultNumbeToFetch);
  }
  

  render() {
    const {error} = this.state;
    if(error){
      return (
        <section className="content">
          <div className="searchProduct"><h2>Info on Products</h2></div>
          <FilterMenu clickCheckBox={this.setShowFlag} brandName={this.state.brandName} />
          <div>There was an error, Please retry later</div>
  
          <Pagination onClickArrow={this.onChangepage} total={this.state.total} currentPage={this.state.currentPage} />
        </section>
      )
    }

    return (
      <section className="content">
        <div className="searchProduct"><h2>Info on Products</h2></div>
        <FilterMenu clickCheckBox={this.setShowFlag} brandName={this.state.brandName} />
        {
          
          this.state.productArray.map(value => {
            const show = value.show;
            return (
              show && <Box value={value} key={value.id} />
            )

          })

        }

        <Pagination onClickArrow={this.onChangepage} total={this.state.total} currentPage={this.state.currentPage} />
      </section>
    )
  }
}

export default Content;


