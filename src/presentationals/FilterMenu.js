import React from 'react'


const FilterMenu = (props) =>{

    const divStyele={
      display: 'absolute'
    }
  
    return(
      <section className="leftmenu">
          <h2>Filtern Nach:</h2>
          <div className="boxFilter">
            <label>Brand</label>
              {
                props.brandName.map( brand =>{
                  let ret = <li  onClick={props.clickCheckBox} checked={true} key={brand.type} brand={brand.type} className="divCheckbox"><span checked={true} brand={brand.type} className="checkBox"> </span><span checked={true} brand={brand.type}>{brand.type}</span></li>
                  if( brand.checked )
                    ret = <li onClick={props.clickCheckBox} key={brand.type} checked={false} brand={brand.type} className="divCheckbox_checked"><span checked={false} brand={brand.type} className="checkBox_checked"> </span><span checked={false} brand={brand.type}>{brand.type}</span></li>
  
                    return(
                      ret
                    )
                })
              }
            
            </div>
        </section>
    )
  }

  export default FilterMenu;