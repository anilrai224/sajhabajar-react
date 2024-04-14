import {NavLink} from 'react-router-dom'

const Links = ({type}) => {
    const links=[
        {
            title:'Home',
            path:'/',
        },
        {
            title:'About',
            path:'/about',
        },
        {
            title:'Category',
            path:'/category',
        },
        {
            title:'Shop',
            path:'/shop',
        },
        {
            title:'Contact',
            path:'/contact',
        },
        {
            title:'All Products',
            path:'/allProducts'
        }
    ]
  return (
    <div className={`navLinks ${type==='responsive' && 'responsive'}`}>
        {links.map(link=>(
            <NavLink to={link.path} key={Math.random()}>{link.title}</NavLink>
        ))}
    </div>
  )
}

export default Links