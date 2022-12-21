/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const HomePageView = () => {
  // Render Home page view
  
  return (
    
    <div style={{
      display: 'flex',
      backgroundColor: '#000',
      marginTop: '3rem'
    }}>

     <div style={{ flex: 1}}>
      <img src="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{ width: '100%'}} alt="" />
     </div>
     <div style={{ flex: 2.5, color: '#fff', fontFamily: 'Verdana sans-serif' }}>
       <h1>Welcome to campus manager. You can add your college campus with it's respective students here. Click on the buttons above to get started</h1> 
     </div>
     <div style={{ flex: 1}}> <img src="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{ width: '100%'}} alt="" /></div>
    </div>
  
  );    
}

export default HomePageView;