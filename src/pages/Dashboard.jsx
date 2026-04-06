import Card from "../components/Card";
import Chart from "../components/Chart";

const Dashboard = () => {
    const data = [
        { title: "Total Users", value: "1,200", change: 12 },
        { title: "Revenue", value: "$8,500", change: 8 },
        { title: "Orders", value: "320", change: -5 },
        { title: "Growth", value: "15%", change: 3 },
    ];

    return (
        <div className="">
            <h1 className="tw-text-3xl tw-font-bold tw-mb-5">Dashboard</h1>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-5">
                {data.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>

            {/* 👇 Chart add */}
            <Chart />
        </div>
    );
};

export default Dashboard;