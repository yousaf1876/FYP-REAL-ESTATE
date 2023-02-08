/* Functional component based on hooks that toggles image when button clicked */ 
import React from "react";
//import pic1 from "../images/banner.jpg";
import pic2 from "../images/maps/2.jpg";
import pic3 from "../images/maps/3.jpg";
import pic4 from "../images/maps/4.jpg";
import pic5 from "../images/maps/5.jpg";
import pic6 from "../images/maps/6.jpg";
import pic7 from "../images/maps/10-1.jpg";
import pic8 from "../images/maps/10-1.jpg";
import pic9 from "../images/maps/10-1.jpg";
import pic10 from "../images/maps/10-1.jpg";
import pic10copy from '../images/maps/10-2.jpg'
import pic11 from "../images/maps/14-1.jpg";
import pic12 from "../images/maps/14-1.jpg";
import pic13 from "../images/maps/14-1.jpg";
import pic14 from "../images/maps/14-1.jpg";
import pic14copy from '../images/maps/14-2.jpg'
import pic15 from "../images/maps/19.jpg";
import pic16 from "../images/maps/19.jpg";
import pic17 from "../images/maps/19.jpg";
import pic18 from "../images/maps/19.jpg";
import pic19 from "../images/maps/19.jpg";
import pic20 from "../images/maps/20.jpg";
import "../StyleSheet/map.css"
const ToggleDivImage = () => {
    // //Marla 1
    // /* Setup component state that tracks visibility of the image. Initially, we'll set
    // the image to visible (toggled true) */
    // const [toggled1, setToggled1] = React.useState(true);
    // const toggleImage1 = () => setToggled1(!toggled1);/* Define a function that toggles the visibility of the image */


        //Marla2
        /* Setup component state that tracks visibility of the image. Initially, we'll set
    the image to visible (toggled true) */
    const [toggled2, setToggled2] = React.useState();
    const toggleImage2 = () => setToggled2(!toggled2);/* Define a function that toggles the visibility of the image */
    //Marla3
        /* Setup component state that tracks visibility of the image. Initially, we'll set
    the image to visible (toggled true) */
    const [toggled3, setToggled3] = React.useState();
    const toggleImage3 = () => setToggled3(!toggled3);/* Define a function that toggles the visibility of the image */
   //Marla4
        /* Setup component state that tracks visibility of the image. Initially, we'll set
    the image to visible (toggled true) */
    const [toggled4, setToggled4] = React.useState();
    const toggleImage4 = () => setToggled4(!toggled4);/* Define a function that toggles the visibility of the image */
    //Marla5
    const [toggled5, setToggled5] = React.useState();
    const toggleImage5 = () => setToggled5(!toggled5);/* Define a function that toggles the visibility of the image */
    //Marla6
    const [toggled6, setToggled6] = React.useState();
    const toggleImage6 = () => setToggled6(!toggled6);/* Define a function that toggles the visibility of the image */
    //Marla7
    const [toggled7, setToggled7] = React.useState();
    const toggleImage7 = () => setToggled7(!toggled7);/* Define a function that toggles the visibility of the image */
      //Marla8
      const [toggled8, setToggled8] = React.useState();
      const toggleImage8 = () => setToggled8(!toggled8);/* Define a function that toggles the visibility of the image */
      //Marla9
      const [toggled9, setToggled9] = React.useState();
      const toggleImage9 = () => setToggled9(!toggled9);/* Define a function that toggles the visibility of the image */
       //Marla10
       const [toggled10, setToggled10] = React.useState();
       const toggleImage10 = () => setToggled10(!toggled10);/* Define a function that toggles the visibility of the image */
  //Marla11
    const [toggled11, setToggled11] = React.useState();
  const toggleImage11 = () => setToggled11(!toggled11);/* Define a function that toggles the visibility of the image */
  //Marla12
  const [toggled12, setToggled12] = React.useState();
  const toggleImage12 = () => setToggled12(!toggled12);/* Define a function that toggles the visibility of the image */
  //Marla13
  const [toggled13, setToggled13] = React.useState();
  const toggleImage13 = () => setToggled13(!toggled13);/* Define a function that toggles the visibility of the image */
  //Marla14
  const [toggled14, setToggled14] = React.useState();
  const toggleImage14 = () => setToggled14(!toggled14);/* Define a function that toggles the visibility of the image */
  //Marla15
  const [toggled15, setToggled15] = React.useState();
  const toggleImage15 = () => setToggled15(!toggled15);/* Define a function that toggles the visibility of the image */
  //Marla16
  const [toggled16, setToggled16] = React.useState();
  const toggleImage16 = () => setToggled16(!toggled16);/* Define a function that toggles the visibility of the image */
  //Marla17
  const [toggled17, setToggled17] = React.useState();
  const toggleImage17 = () => setToggled17(!toggled17);/* Define a function that toggles the visibility of the image */
   //Marla18
   const [toggled18, setToggled18] = React.useState();
   const toggleImage18 = () => setToggled18(!toggled18);/* Define a function that toggles the visibility of the image */
    //Marla19
  const [toggled19, setToggled19] = React.useState();
  const toggleImage19 = () => setToggled19(!toggled19);/* Define a function that toggles the visibility of the image */
   //Marla20
   const [toggled20, setToggled20] = React.useState();
   const toggleImage20 = () => setToggled20(!toggled20);/* Define a function that toggles the visibility of the image */

    return (
        <div >
            
      <div>
        <h1>Please Select your desired Area size</h1>
      {/* // marla1 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        {/* <button onClick={toggleImage1}>Marla1</button>
        
        {/* Render image if toggled is truthy */}
        {/* {toggle1 && <img className="imgset" src={pic1} alt="marla1" />} */} 
      </div>
      <div className = "set" >
          {/* // marla2 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button   onClick={toggleImage2}>Marla2</button>
        {/* Render image if toggled is truthy */}
        {toggled2 &&  <img className="imgset" src={pic2}  alt="marla2" />}
      </div>
      <div className = "set">
          {/* // marla3 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage3}>Marla3</button>
        {/* Render image if toggled is truthy */}
        {toggled3 && <img className="imgset" src={pic3} alt="marla3" />}
      </div>
      <div className = "set">
          {/* // marla4 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage4}>Marla4</button>
        {/* Render image if toggled is truthy */}
        {toggled4 && <img className="imgset" src={pic4} alt="marla4" />}
      </div>
      <div className = "set">
          {/* // marla5 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage5}>Marla5</button>
        {/* Render image if toggled is truthy */}
        {toggled5 && <img src={pic5} className="imgset" alt="marla5" />}
      </div>
      <div className = "set">
          {/* // marla6 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage6}>Marla6</button>
        {/* Render image if toggled is truthy */}
        {toggled6 && <img src={pic6} className="imgset" alt="marla6" />}
      </div>
      <div className = "set">
          {/* // marla7 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage7}>Marla7</button>
        {/* Render image if toggled is truthy */}
        {toggled7 && <img className="imgset" src={pic7} alt="marla7" />}
        {toggled7 && <h2>Ground flour </h2>}
        {toggled7 && <img className="imgset" src={pic10copy} alt="marla7" />}
        {toggled7 && <h2>First flour </h2>}
      </div >
      <div className = "set">
          {/* // marla8 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage8}>Marla8</button>
        {/* Render image if toggled is truthy */}
        {toggled8 && <img className="imgset" src={pic8} alt="marla8" />}
        {toggled8 && <h2>Ground flour </h2>}
        {toggled8 && <img className="imgset" src={pic10copy} alt="marla8" />}
        {toggled8 && <h2>Ground flour </h2>}
      </div>
      <div className = "set">
          {/* // marla9 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage9}>Marla9</button>
        {/* Render image if toggled is truthy */}
        {toggled9 && <img className="imgset" src={pic9} alt="marla9" />}
        {toggled9 && <h2>Ground flour </h2>}
        {toggled9 && <img className="imgset" src={pic10copy} alt="marla9" />}
        {toggled9 && <h2>Ground flour </h2>}
      </div>
      <div className = "set">
          {/* // marla10 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage10}>Marla10</button>
        {/* Render image if toggled is truthy */}
        {toggled10 && <img className="imgset" src={pic10} alt="marla10" />}
        {toggled10 && <h2>Ground flour </h2>}
        {toggled10 && <img className="imgset" src={pic10copy} alt="marla10" />}
        {toggled10 && <h2>first flour </h2>}
      </div>
      <div className = "set">
          {/* // marla11 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage11}>Marla11</button>
        {/* Render image if toggled is truthy */}
        {toggled11 && <img className="imgset" src={pic11} alt="marla11" />}
        {toggled11 && <h2>Ground flour </h2>}
        {toggled11 && <img className="imgset" src={pic14copy} alt="marla11" />}
        {toggled11 && <h2>first flour </h2>}
      </div>
      <div className = "set">
          {/* // marla12 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage12}>Marla12</button>
        {/* Render image if toggled is truthy */}
        {toggled12 && <h2>Ground flour </h2>}
        {toggled12 && <img className="imgset" src={pic12} alt="marla12" />}
        {toggled12 && <h2>First flour </h2>}
        {toggled12 && <img className="imgset" src={pic14copy} alt="marla12" />}
      </div>
      <div className = "set">
          {/* // marla13 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage13}>Marla13</button>
        {/* Render image if toggled is truthy */}
        {toggled13 && <h2>Ground flour </h2>}
        {toggled13 && <img className="imgset" src={pic13} alt="marla13" />}
        {toggled13 && <h2>first flour </h2>}
        {toggled13 && <img className="imgset" src={pic14copy} alt="marla13" />}
      </div>
      <div className = "set">
          {/* // marla14 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage14}>Marla14</button>
        {/* Render image if toggled is truthy */}
        {toggled14 && <h2>Ground flour </h2>}
        {toggled14 && <img className="imgset" src={pic14} alt="marla14" />}
        {toggled14 && <h2>first flour</h2>}
        {toggled14 && <img className="imgset"  src={pic14copy} alt="marla14" />}
      </div>
      <div className = "set">
          {/* // marla15 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage15}>Marla15</button>
        {/* Render image if toggled is truthy */}
        {toggled15 && <img className="imgset" src={pic15} alt="marla15" />}
      </div>
      <div className = "set">
          {/* // marla16 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage16}>Marla16</button>
        {/* Render image if toggled is truthy */}
        {toggled16 && <img className="imgset" src={pic16} alt="marla16" />}
      </div>
      <div className = "set">
          {/* // marla17 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage17}>Marla17</button>
        {/* Render image if toggled is truthy */}
        {toggled17 && <img className="imgset" src={pic17} alt="marla17" />}
      </div>
      <div className = "set">
          {/* // marla18 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage18}>Marla18</button>
        {/* Render image if toggled is truthy */}
        {toggled18 && <img className="imgset" src={pic18} alt="marla18" />}
      </div>
      <div className = "set">
          {/* // marla19 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage19}>Marla19</button>
        {/* Render image if toggled is truthy */}
        {toggled19 && <img className="imgset" src={pic19} alt="marla19" />}
      </div>
      <div className = "set">
          {/* // marla20 */}
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage20}>Marla20</button>
        {/* Render image if toggled is truthy */}
        {toggled20 && <img className="imgset" src={pic20} alt="marla20" />}
      </div>
      </div>
      
    );
  };
  export default ToggleDivImage;
  /* Usage 
  <ToggleDivImage />
  */