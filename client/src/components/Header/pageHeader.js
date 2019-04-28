
import React from "react";
import { Helmet } from "react-helmet";
import {capitalize} from '../../Helpers/textHelper';

export const PageHeader = ({ title, description, keywords, header }) => (
    <div>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
        {header && <h1 align="left">{capitalize(header)}</h1>}
    </div>
);




  