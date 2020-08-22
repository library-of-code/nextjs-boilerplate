import { Layout, Menu, Button } from 'antd';
import navbuttons from './navbuttons'
import NavButton from './NavButton';
import Authstate from '../authstate/Authstate';
const { Header, Content, Footer } = Layout;

export default () => (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {navbuttons.map(buttonInfo => <NavButton {...{ ...buttonInfo }} />)}
            {/* <NavButton path={'/about'} label={'about'} /> */}
            <div style={{float: 'right'}}>
                <Authstate/>
            </div>
        </Menu>
    </Header>
)