import Layout from "../components/layout/Layout";
import BlogItem from "../components/blogItem/BlogItem";
import useSWR from "swr";

const index = () => {

    const { data, error } = useSWR('/api/blogs')
    if (error) return <Layout>
        <div>Welcome to NextJS Starter</div>
    </Layout>

    return (
        <Layout>
            <div>
                {data && data.map(item => <BlogItem {...item} />)}
            </div>
        </Layout>
    )
}

export default index