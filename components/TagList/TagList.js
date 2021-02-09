import Tag from 'components/Tag';
import tags from 'styles/colorScheme';
import styles from './TagList.module.scss';

const TagList = () => {
    return (
        <div className={styles.container}>
            <h2>List of Tags:</h2>
            {
                <div className={styles.innerContainer}>
                    {
                        tags && Object.keys(tags).map( (item, index) => (
                            <Tag key={`${item}-${index}`} tagName={item}/>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default TagList;
