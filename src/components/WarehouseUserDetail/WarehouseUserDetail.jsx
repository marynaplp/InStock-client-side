import "./WarehouseUserDetail.scss";

function WarehouseUserDetail() {
  return (
    <div className="Warehouse">
      <div className="Warehouse__Detail">
        <div className="Warehouse__Detail-address">
          <h4 className="Warehouse__Detail-header">warehouse address:</h4>
          <span>
            33 Pearl Street SW,
            <br class="break__line" /> Washington, USA
          </span>
        </div>
        <div className="Warehouse__Detail-contact">
          <div className="Warehouse__Detail-section">
            <h4 className="Warehouse__Detail-header">Contact name:</h4>
            <span>Graeme Lyon</span>
            <br></br>
            <span>Warehouse Manager</span>
          </div>
          <div className="WareHouse__Detail-section">
            <h4 className="Warehouse__Detail-header">Contact information:</h4>
            <span>+1(647)504-0911</span>
            <br></br>
            <span>glyon@instock.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseUserDetail;
