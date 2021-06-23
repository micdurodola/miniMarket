import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';



const MarketList = (props) => {  
     
    return(
    <div>
        <section className="main-image">
            <div className="container">
            <div className="row">
                <div className="col-md-8 search">
                <h3>Find Market</h3>
                <form action="">
                    <input type="search" name="" id="" placeholder="Enter city or state.."  />
                <button type="submit"className="search-btn">Find Market<br/><p className="btn-text">One Naira For First Rent</p></button>   
                </form>
                </div>
            </div>

            </div>
        </section>        


        <section>
            <div className="container">
            <div className="row">
               
                <div className="col-md-10">
                    <div className="row">
                    
                    
                    </div>
                    <div className="table-responsive">
                        <table className="table  main-table" id="myTable">
                           
                        <tbody>
                            <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="table_button"><Link to="/rent" className="btn-rent">Rent Now</Link></td>
                            </tr>
                        
                      
                        </tbody>
                     
                        </table>
                    </div>

                </div>
            </div>
        </div>
        </section>

    </div>

    

    );
}

export default  MarketList;