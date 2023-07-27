import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'


export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, GuitarLA, tienda de musica'}
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
              <Image src='/img/nosotros.jpg' width={1000} height={800}  alt='Imagen sobre nosotros'/>
            <div>
              <p>
              Suspendisse ac velit diam. Proin at massa non elit tristique gravida id nec libero. 
              Suspendisse suscipit sapien et quam tristique elementum. Sed hendrerit nulla vel turpis rutrum consequat. 
              Proin efficitur vehicula lorem. Phasellus hendrerit cursus metus, ut sollicitudin nisl interdum vel. 
              Aenean ut scelerisque diam, at ultrices enim. 
              Suspendisse lacinia tincidunt urna, a aliquam lacus accumsan a. Mauris lobortis volutpat purus pellentesque semper.
              </p>
              <p>
                Sed quis tincidunt ante. Aenean placerat lobortis lectus ac ultrices. 
                Aenean nibh eros, consectetur ut nibh at, euismod tempus eros. 
                Morbi pretium, nisi ac tincidunt hendrerit, dui dui rhoncus justo, et porttitor magna neque mattis erat. 
                Pellentesque lacinia at nibh quis egestas. Maecenas consequat urna nec volutpat vestibulum. 
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus in tempor urna.
              </p>
            </div>
          </div>
        </main>

    </Layout>
  )
}
