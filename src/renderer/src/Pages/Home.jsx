import UploadJSON from "../Components/downloadUploadFiles/UploadJSON";
import ColorChooser from "./ColorChooser";
import WelcomeMessage from "./WelcomeMessage";
// import DownloadJSON from "../Components/DownloadJSON";
function Home({ fileData, setFileData }) {

  const repopulateComponent = () => {

    if (!!fileData) {
      window.localStorage.setItem("dataJSON", JSON.stringify(fileData));
      window.alert("You Have successfully Repopulated Your Receipts. Please Restart App.")

    }
    else {
      window.alert("Please Upload data.json File First...")
    }
  };

  const pixstyle = {
    fontSize: "15px",
  };
  const pixstyle2 = {
    fontSize: "15px",
  };


  return (
    <div style={{marginLeft:"15px",marginRight:"15px"}}className="cardContact">

      <div className="homePAge">

        <h1>Simple Planner</h1>
        <h3 style={{textAlign:"center"}}>A Financial Planner for Personal Use</h3>
       <h2 style={{textAlign:"center"}}><WelcomeMessage/></h2>
       <div><ColorChooser /></div>

        <p style={pixstyle2}>
          An estimated 6000 entries containing about 500 characters each can be stored locally on this application. 

        </p>
      </div>

    </div>
  );
}

export default Home;
