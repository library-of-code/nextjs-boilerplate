import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import styles from './BlogItem.module.css';

export default ({ title, content, image, ...props }) =>
    <Card
        hoverable
        style={{ width: 300, objectFit: "cover" }}
        cover={<img className={styles.image} alt="example" src={image} />}
        onClick={() => props.handler({ title, content, image })}
    >
        <Meta title={title} description={content} />
    </Card>