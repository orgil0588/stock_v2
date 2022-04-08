import { data } from "autoprefixer";
import React, { Component, useRef } from "react";

// import { IgrTreemapModule } from "igniteui-react-charts";

// import { IgrTreemap } from "igniteui-react-charts";

// const Treemap = ({ data }) => {
//   console.log(data);
//   const treemapRef = useRef();
//   const mods = [IgrTreemapModule];
//   mods.forEach((m) => m.register());

//   return (
//     <div className="w-full ">
//       {data && (
//         <IgrTreemap
//           valueMemberPath="pop"
//           rootTitle="Countries"
//           parentIdMemberPath="parent"
//           labelMemberPath="name"
//           idMemberPath="name"
//           dataSource={[
//             { name: "Хувьцаат компани нэгдүгээр ангилал", pop: null, id: "A" },
//             { name: "Хувьцаат компани хоёрдугаар ангилал", pop: null, id: "A" },
//             {
//               name: "Хувьцаат компани гуравдугаар ангилал",
//               pop: null,
//               id: "A",
//             },
//             { name: "UYN", pop: 1386192080, id: "UYN", parent: "B" },
//             { name: "UBH", pop: 17861055480, id: "UBH", parent: "B" },
//             { name: "HRD", pop: 578803214, id: "HRD", parent: "C" },
//             { name: "MNH", pop: 1635865800, id: "MNH", parent: "B" },
//             { name: "BNG", pop: 13318086200, id: "BNG", parent: "A" },
//             { name: "ATR", pop: 12189520000, id: "ATR", parent: "B" },
//             { name: "TCK", pop: 34683057640, id: "TCK", parent: "A" },
//             { name: "MNS", pop: 3508770000, id: "MNS", parent: "C" },
//             { name: "MIB", pop: 1745615630, id: "MIB", parent: "B" },
//             { name: "SUL", pop: 4643970100, id: "SUL", parent: "B" },
//             { name: "MBG", pop: 5963158800, id: "MBG", parent: "C" },
//             { name: "KEK", pop: 4846960800, id: "KEK", parent: "C" },
//             { name: "TVL", pop: 224026050, id: "TVL", parent: "C" },
//             { name: "TAH", pop: 11899830000, id: "TAH", parent: "B" },
//           ]}
//           fillBrushes="rgba(78, 98, 207, 1) rgba(138, 88, 214, 1)"
//           fillScaleMode="Value"
//           isFillScaleLogarithmic="true"
//           fillScaleMinimumValue="0"
//           fillScaleMaximumValue="1500000000"
//           headerDisplayMode="Overlay"
//           parentNodeLeftPadding="0"
//           parentNodeTopPadding="0"
//           parentNodeRightPadding="0"
//           parentNodeBottomPadding="0"
//           outline="black"
//           strokeThickness="1"
//           ref={treemapRef}
//         ></IgrTreemap>
//       )}
//     </div>
//   );
// };

// export default Treemap;
import ReactApexChart from "react-apexcharts";
class Treemap extends Component {
  constructor(props) {
    props.data.data.sort((a, b) => {
      return b.y - a.y;
    });
    console.log(props.data.data);
    super(props);

    this.state = {
      series: [
        {
          name: "Heatmap",
          data: props.data.data,
        },
      ],
      options: {
        legend: {
          show: false,
        },
        title: {
          text: "Дотоодын хөрөнгийн зах зээлийн үнэлгээний зураглал",
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "12px",
          },
        },
        plotOptions: {
          treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
          },
        },
      },
    };
  }
  render() {
    return (
      <div className="w-full mx-auto">
        {data && (
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="treemap"
            height={900}
          />
        )}
      </div>
    );
  }
}

export default Treemap;
