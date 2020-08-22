import { Layout } from 'antd'
import Header from '../header/Header'
import Footer from '../footer/Footer'
const { header, Content, footer } = Layout;

export default (props) =>
    <Layout>
        <Header />
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div>
                {props.children}
            </div>
        </Content>
        <span style={{position: "absolute", bottom: 0}}><Footer /></span>
    </Layout>