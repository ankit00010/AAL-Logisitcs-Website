import React from 'react';
import './Steps.css'; // Import the CSS file
import step1 from './Images/register.png'; 
import step2 from './Images/parcel.png'; 
import step3 from './Images/fast.png'; 
import step4 from './Images/delivered.png'; 

const Steps = () => {
  // Define the content for each step
  const stepContent = {
    step1: {
      heading: 'Parcel Register',
      description: 'One of the key components of the best logistics solutions industry',
    },
    step2: {
      heading: 'Parcel Loading',
      description: 'Another important step in the logistics process to ensure timely delivery',
    },
    step3: {
      heading: 'Parcel In-transit',
      description: 'Efficiently send parcels to their designated destinations within the specified time frame, ensuring timely and reliable delivery.'
    },
    
    step4: {
      heading: 'Parcel Delivery',
      description: 'The final step where the parcel reaches its destination safely and on time',
    },
  };

  return (
    <div className='steps_container'>
    <div className="steps ">
  <h3 className="fs-6  mb-3 mb-xl-4 text-uppercase text-center">&ndash; &ndash;&ndash; &ndash;&ndash;&ndash; How it works &ndash; &ndash;&ndash; &ndash;&ndash;&ndash;</h3>

      <div className="steps_box py-4 "> 
        {/* Step 1 */}
        <div className="steps_box_items"> 
          <img src={step1} alt="Register" width={100} height={100} />
          <p className="steps_box_item_step"> 
            <span>Step 1</span>
          </p>
          <h3>{stepContent.step1.heading}</h3>
          <p>{stepContent.step1.description}</p>
        </div>

        {/* Step 2 */}
        <div className="steps_box_items">
          <img src={step2} alt="Parcel Loading" width={100} height={100} />
          <p className="steps_box_item_step"> 
            <span>Step 2</span>
          </p>
          <h3>{stepContent.step2.heading}</h3>
          <p>{stepContent.step2.description}</p>
        </div>

        {/* Step 3 */}
        <div className="steps_box_items">
          <img src={step3} alt="Parcel In-transit" width={100} height={100} />
          <p className="steps_box_item_step"> 
            <span>Step 3</span>
          </p>
          <h3>{stepContent.step3.heading}</h3>
          <p>{stepContent.step3.description}</p>
        </div>

        {/* Step 4 */}
        <div className="steps_box_items">
          <img src={step4} alt="Parcel Delivery" width={100} height={100} />
          <p className="steps_box_item_step"> 
            <span>Step 4</span>
          </p>
          <h3>{stepContent.step4.heading}</h3>
          <p>{stepContent.step4.description}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Steps;
