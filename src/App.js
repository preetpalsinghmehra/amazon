
import ProductData from './ProductData';
import classes from './App.module.css';

function App(){
  return(
    <>
    <div className={classes.App}>
    <header className={classes.App}>
      <nav className = {classes.Topbar}>
        <img src="https://www.esyon.de/wp-content/uploads/2016/11/Amazon-Logo-wei%C3%9F.png" alt="AMAZON Logo"/>
      </nav>
    </header>
    </div>

    <div className={classes.MainContainer}>
      <div className ={classes.ProductPreview}>
        <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview"/>
      </div>

    <div className={classes.FeatureData}>
      <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
    </div>
      <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
        <p className={classes.ProductDescription}>{ProductData.description}</p>

        <h3 className={classes.SectionHeading}>Select Color</h3>
        <div>
        <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Color"/>
        <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Color"/>
        <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Color"/>
        <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Color"/>
        </div>
        <h3 className={classes.SectionHeading}>Features</h3>
        <div>
          <button className={[classes.FeatureItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
          <button  className={classes.FeatureItem}>Heart Rate</button>
        </div>
        <button className={classes.PrimaryButton}>Buy Now</button>
      </div>
    </div>
    </>
  );
}

{/*function App(){
  return(
    <>
    <div className="App">
    <header className="App-header">
      <nav className = "Topbar">
        <img src="https://www.esyon.de/wp-content/uploads/2016/11/Amazon-Logo-wei%C3%9F.png" alt="AMAZON Logo"/>
      </nav>
    </header>
    </div>

    <div className="MainContainer">
      <div className ="ProductPreview">
        <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview"/>
      </div>

    <div className="FeatureData">
      <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
    </div>
      <div className="ProductData">
        <h1 className="ProductTitle">{ProductData.title}</h1>
        <p className="ProductDescription">{ProductData.description}</p>

        <h3 className="SectionHeading">Select Color</h3>
        <div>
        <img className="ProductImage" src="https://imgur.com/PTgQlim.png" alt="Red Color"/>
        <img className="ProductImage" src="https://imgur.com/Mplj1YR.png" alt="Blue Color"/>
        <img className="ProductImage" src="https://imgur.com/xSIK4M8.png" alt="Purple Color"/>
        <img className="ProductImage" src="https://imgur.com/iOeUBV7.png" alt="Black Color"/>
        </div>
        <h3 className="SectionHeading">Features</h3>
        <div>
          <button className="FeatureItem">Time</button>
          <button  className="FeatureItem">Heart Rate</button>
        </div>
        <button className="PrimaryButton">Buy Now</button>
      </div>
    </div>
    </>
  );
}*/}

export default App;
