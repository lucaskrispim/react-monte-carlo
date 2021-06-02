import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
//import Mchart from "components/chart";
import HighchartsReact from "components/chart/index_h";

const Dashboard = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="container">
          <h1 className="text-primary py-3">Método de Monte Carlo</h1>
          <div className="col-sm-12">
              <HighchartsReact/>
            </div>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default Dashboard;