import { Menu } from 'antd';
import Link from 'next/link'

export default ({ path, label, ...props }) => (
    <Menu.Item {...{ ...props }}>
        <Link href={path} passHref>
            <a>{label}</a>
        </Link>
    </Menu.Item>
)