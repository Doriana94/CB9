import styles from './hero.module.scss';

const HeroComponent = () => {

    return (
        <div className={ styles.heroContainer }>
            <h2>Titolo film</h2>
         <img src={'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} /> 
            <button className={ styles.heroBtn }>Discover more</button>
        </div>
    )
}

export default HeroComponent;