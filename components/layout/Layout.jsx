import { Layout } from 'antd'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/client';
const { header, Content, footer } = Layout;

export default (props) => {

    const [session, loading] = useSession()

    useEffect(() => {
        if(props.protected) {
            if(!session && !loading) signIn()
        }
    })

    return (
        <Layout>
            <Header />
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div>
                    {props.children}
                </div>
            </Content>
            <span style={{ position: "absolute", bottom: 0 }}><Footer /></span>
        </Layout>
    )
}