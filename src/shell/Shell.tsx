import React, { FC, Fragment, ReactNode, useMemo } from "react";
import { useLocation } from "react-router";
import { routes } from "../app-routes/routes";
import "./Shell.scss";

type ShellProps = {
    children?: ReactNode;
};

export const Shell: FC<ShellProps> = ({ children }: ShellProps) => {
    const { pathname } = useLocation();
    const shouldShowSideContent = useMemo(() => pathname === routes.landing, [
        pathname,
    ]);
    return (
        <div
            className={`shell ${
                !shouldShowSideContent && "shell--shrink-side"
            }`}
        >
            <div className="shell__side">
                {shouldShowSideContent && (
                    <>
                        <h1>
                            Seguro de<br></br>
                            <b>Salud</b>
                        </h1>
                        <br />
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                        <div className="shell__side__spacer"></div>
                        <p className="shell__side__footer">
                            @2020 RIMAC Seguros y Reaseguros
                        </p>
                    </>
                )}
            </div>
            <div className="shell__content">{children}</div>
        </div>
    );
};

export default Shell;
