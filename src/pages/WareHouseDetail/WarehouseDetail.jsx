import Header from "../../components/Header/Header";
import WarehouseUserDetail from '../../components/WarehouseUserDetail/WarehouseUserDetail';
import WarehouseInventoryList from "../../components/WarehouseList/WarehouseInventoryList/warehouseInventoryList";
export default function WarehouseDetail() {
    return (
        <>
            <WarehouseUserDetail/>
            <WarehouseInventoryList />
             
        </>
    )
}