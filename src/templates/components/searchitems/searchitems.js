import React from 'react';
import './searchitems.css';
function searchitems(){
    return(
        <div>
            <div id="finddress-header">Find the perfect dress for you from our online 
            store with a wide range of styles and sizes to choose from.
            </div>
            <div  class="col col-sm-10 offset-1" >
                <select id="finddress-btn-area">
                    <option>select dress type</option>
                    <option>Frock</option>
                    <option>Skirt</option>
                    <option>Trousers</option>
                    <option>Blouse</option>
                    <option>Jersey</option>
                </select>

                <select id="finddress-btn-area">
                    <option>Select price range(Rs.)</option>
                    <option>All</option>
                    <option>below 3000</option>
                    <option>3000-5000</option>
                    <option>50000-10000</option>
                    <option>over 10000</option>
                </select>

            </div>
        </div>
    );
}

export default searchitems;