import React, { ReactNode } from "react";

type LayoutProps = {
    children?:ReactNode
}

const layout = (props:LayoutProps) => (
    <div>
        <div>toolbar, Sidedrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </div>
);

export default layout;