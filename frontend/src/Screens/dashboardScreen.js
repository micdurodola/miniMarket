import React from "react";
import {Link} from "react-router-dom";


const Dashboard = () =>{
    return(
        <div>        
    
        <main>
            <div className="container my-5">
                <div className="container">
                    <div className="row">
                        <div className="col.md-12 product-button">
                        <button id="add__new__list" type="button" className="btn btn-success position-absolute " data-toggle="modal" data-target=".bd-example-modal-lg"> Add a new Market</button>
                        <br/><br/>
                        </div>
                    </div>
                    

                </div>
               
            <div className="card">               
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Long</th>
                        <th scope="col">Latt</th>
                        <th scope="col">Edit List</th>
                        <th scope="col">list info</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <a className="btn btn-sm btn-primary edit" href="#">edit</a>
                            <a className="btn btn-sm btn-danger" href="#"> delete</a>    
                        </td>
                        <td><a className="btn btn-sm btn-info" href="#"><i className="fas fa-info-circle"></i> Details</a> </td>
                    </tr>
                  
                    
                    </tbody>
                </table>
            </div>
                     


        <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="card-body text-center">   
                <h5>Add new Market</h5>                 
                </div>
                    <div className=" card col-8 offset-2 my-2 p-3">
                <form>
                    <div className="form-group"> 
                    
                    <input type="text" className="form-control" name="marketname" id="marketname" placeholder="Enter Market Name" />
                    </div>
                    <div className="form-group">  
                    <textarea className="form-control" name="description" id="description" placeholder="Enter description" ></textarea>                    
                   
                    </div>
                    <div className="form-group">  
                        <select className="form-control" name="description">
                            <option disabled selected hidden>Category</option>
                            <option>Food</option>
                            <option>Fruit</option>
                            <option>Meat</option>
                            <option>Dairy</option>
                        </select>                    
                    </div>
                    <div className="form-group">   
                    <input type="text" className="form-control" name="address" id="address" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">   
                    <input type="text" className="form-control" name="city" id="city" placeholder="City" />
                    </div>
                    <div className="form-group">   
                    <input type="text" className="form-control" name="state" id="state" placeholder="State" />
                    </div>
                    <div className="form-group">   
                    <input type="file" class="form-control file-input" id="images"   />
                    </div>
                   
          
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-block btn-primary submit-control">Sign in</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        </div>
        </main>
    

    </div>

    );
}

export default Dashboard;