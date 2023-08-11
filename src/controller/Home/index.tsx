import { useSelector } from "react-redux"
import homeModel from "../../model/Home"
import HomeView from "../../view/Home"

const HomeController = () => {
    const { fetchData } = homeModel()
    const data = useSelector((state: any) => state.demoReducer)

    return <HomeView fetchData={fetchData} data={data} />
}

export default HomeController