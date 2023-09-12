import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return(
        <div>
            <aside className={styles.sidebar}>
                <img 
                    className={styles.cover} 
                    src="https://images.unsplash.com/photo-1643579296072-c78054cbb51b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                    alt="Caracal" 
                />
                <div className={styles.profile}>
                    <Avatar src="https://images.unsplash.com/photo-1577053191626-5f24f09f3baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"/>
                    <strong>Lucas</strong>
                    <span>Developer</span>
                </div>
                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </div>
    );
}