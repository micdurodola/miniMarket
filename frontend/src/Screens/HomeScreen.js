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
                    <input type="search" name="" id="" placeholder="Enter Market Name.."  />
                <button type="submit"className="search-btn">Find Market<br/><p className="btn-text">One Naira For First Rent</p></button>   
                </form>
                </div>
            </div>

            </div>
        </section>   
        <div className="container">
        <hr/>
            <div className="row">
                <div className="col-md-2">
                    <p>General Market</p>
                </div>
                <div className="col-md-2">
                    <p>Fruit Market</p>
                </div>
                <div className="col-md-2">
                    <p>Dairy Market</p>
                </div>
                <div className="col-md-2">
                    <p>Dairy Market</p>
                </div>

            </div>
            <hr/>
        </div>     


        <div className="container">
            <div className="row">               
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200/150/?random" />
                    <div className="card-block">
                        <h5 className="text-bold">Tawshif Ahsan Khan</h5>
                    </div>
                </div>
               
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200/150/?random" />
                    <div className="card-block">
                        <h5 className="text-bold">Tawshif Ahsan Khan</h5>
                    </div>
                </div>
               
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200/150/?random" />
                    <div className="card-block">
                        <h5 className="text-bold">Tawshif Ahsan Khan</h5>
                    </div>
                </div>
               
            </div>
            </div>
        </div>
       

    </div>

    

    );
}

export default  MarketList;