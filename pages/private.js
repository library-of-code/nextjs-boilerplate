import { useSession } from 'next-auth/client'
import Layout from '../components/layout/Layout'

export default () => 
    <Layout protected>
        <div>This is a protected route</div>
    </Layout>