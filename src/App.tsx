import { Row, Typography, Col, Image, Switch, Result } from 'antd';
import { title1, title2, title3, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6 } from "./language/language"
import { useState } from 'react';
import { GiRabbit } from "react-icons/gi";

const { Title, Paragraph, Text, Link } = Typography;


const App = () => {
  const [translate, setTranslate] = useState<boolean>(false)

  return (<Row justify={"center"}>

    <Result
      icon={<GiRabbit color='blue' size={100} />}
      title="Coming soon..."
    />
    {/* <Switch unCheckedChildren={<div>TR</div>} checkedChildren={<div>EN</div>} onChange={(checked) => setTranslate(checked)} />

    <Col sm={24}>

      <Title level={1}>{title1(translate)}</Title>

      <Paragraph >
        {paragraph1(translate)}
      </Paragraph>

    </Col>
    <Col sm={8}>
      <Image width={"80%"} src='https://cdn.dribbble.com/users/52927/screenshots/2436222/remoteserviceanimation800-600.gif' />
    </Col>
    <Col sm={16}>
      <Title level={2}>{title2(translate)}</Title>
      <Paragraph>
        {paragraph2(translate)}
      </Paragraph>
    </Col>

    <Col sm={24}>
      <Title level={3}>{title3(translate)}</Title>
      <Paragraph>
        <ul>
          <li>
            {paragraph3(translate)}
          </li>
          <li>
            {paragraph4(translate)}
          </li>
          <li>
            {paragraph5(translate)}
          </li>
          <li>
            {paragraph6(translate)}
          </li>
        </ul>
      </Paragraph>
    </Col>

    <Col xs={{ span: 12 }}>
      <Image width={"100%"} src='https://miro.medium.com/v2/resize:fit:1400/1*pJRJgw1Vj-1MjhtQFZAZRA.png' />
    </Col> */}


  </Row>
  )
}


export default App;