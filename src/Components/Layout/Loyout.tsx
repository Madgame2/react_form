import React from "react";
import Styles from './Loyout.module.css'

type LoyoutProps={
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Layout: React.FC<LoyoutProps>=({header,children,footer})=>{
    return (
        <div className={Styles.Contaner}>
            {header&&(<header>
                {header}
            </header>)}

            <main className={Styles.main}>{children}</main>

            {footer&&(
            <footer>
                {footer}
            </footer>)}
        </div>
    )
}

export default Layout;