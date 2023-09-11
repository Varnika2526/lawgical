import React from "react";
import image1 from "../images/image1.png";

function Body(){
    return(
       <>
       <div>
       <img  className="image" src ={image1}/>
       <h2 class="title">Online Legal Advice | Guaranteed Solution To Every Legal Issue</h2>
       </div>
       <br/>
       <hr/>
       <div className="form-container">
        <div className="card">
        <form id="contact">
            <h4 class="txt">Get Help with legal advice</h4>
            <fieldset id="#first_div">
              <fieldset class="fs">
                <input type="text" placeholder="Full Name"/>
              </fieldset>
              <fieldset  class="fs">
                <input type="email" placeholder="Email-Address"/>
              </fieldset>
              <fieldset  class="fs">
                <input type="number" placeholder="Contact Number"/>
              </fieldset>
              <fieldset class="fs">
              <select name="state" id="state">
                  <option value="">State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Others">Others</option>
                  <option value="Out Of India">Out Of India</option>
                </select>           
                </fieldset>
                </fieldset>
              </form>


        </div>

       </div>
       
       </>
    );
};

export default Body;