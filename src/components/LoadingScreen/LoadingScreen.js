import { observer } from 'mobx-react';
import React, { Fragment } from 'react';
import APICall from '../../store/APICallStore';
import LoaderHtml from '../LoaderHtml';
import './loading.css';

const LoadingScreen = observer(({ children }) => {
	const { loading } = APICall;
	return <Fragment>{loading ? <LoaderHtml /> : children}</Fragment>;
});

export default LoadingScreen;
