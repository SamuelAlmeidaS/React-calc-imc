/* eslint-disable react/prop-types */
import styles from './Grid.module.css';
import upImage from '../../assets/img/up.png';
import downImage from '../../assets/img/down.png';


export const GridItem = ({ item }) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                 <img src={item.icon === 'up' ? upImage : downImage} alt='' width={30}/>
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>

        </div>
    );
}