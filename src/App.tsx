import { Row, Typography, Select, Space, Col } from "antd";
import type { SelectProps } from "antd";
import { FaFlag } from "react-icons/fa";
import { translator } from "./language/translator";
import { useState } from "react";

const { Title, Paragraph, Text, Link } = Typography;

const options: SelectProps["options"] = [
   {
      label: <FaFlag />,
      value: "tr",
      desc: "Turkey (tr)",
   },
   {
      label: <FaFlag />,
      value: "en",
      desc: "English (en)",
   },
   {
      label: <FaFlag />,
      value: "de",
      desc: "Deutch (de)",
   },
];

const App = () => {
   const [language, setLanguage] = useState<string>("en");

   const handleChange = (value: string) => {
      setLanguage(value);
   };

   return (
      <Row justify={"center"}>
         <Col span={24}>
            <Select
               style={{ width: "100%" }}
               placeholder="select one country"
               onChange={handleChange}
               optionLabelProp="label"
               options={options}
               optionRender={(option) => (
                  <Space>
                     <span role="img" aria-label={option.data.label}>
                        {option.data.label}
                     </span>
                     {option.data.desc}
                  </Space>
               )}
            />
         </Col>
         <Col span={12}>
            <Text>{translator("test", language)}</Text>
         </Col>
      </Row>
   );
};

export default App;
