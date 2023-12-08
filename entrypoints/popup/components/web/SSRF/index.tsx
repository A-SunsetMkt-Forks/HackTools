import type { TabsProps } from "antd";
import { Tabs } from "antd";
import CloudPayloads from "./CloudPayloads";
import FilterBypass from "./FilterBypass";
import Gopherizer from "./Gopherizer";
import XXE from "./XXE";

const SQLMainPage = () => {
	const items: TabsProps["items"] = [
		{
			key: "1",
			label: `SSRF Payloads`,
			children: <CloudPayloads />,
		},
		{
			key: "3",
			label: `Filter Bypass`,
			children: <FilterBypass />,
		},
		{
			key: "2",
			label: `XXE`,
			children: <XXE />,
		},
		{
			key: "5",
			label: `Gopherizer`,
			children: <Gopherizer />,
		},
	];

	return (
		<>
			<Tabs defaultActiveKey="1" items={items} />
		</>
	);
};

export default SQLMainPage;
