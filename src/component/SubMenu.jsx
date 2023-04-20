import React,{useState, useRef, useEffect} from 'react';
import {useGlobalContext} from '../context'

const SubMenu = () => {
  const { isSubmenuOpen, page: { page, links }, location } = useGlobalContext();
  const [column, setColumn] = useState('col-2');
  const container = useRef(null)
  useEffect(() => {
    const { center, bottom } = location;
    const subMenu = container.current;
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumn('col-3')
    }
    if (links.length > 3) {
      setColumn('col-4')
    }
    if (page === 'company') {
      container.current.style.backgroundColor = "#CB68EF";
    }
    else {
      container.current.style.backgroundColor = "White";
    }
  },[page,links])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${column}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default SubMenu