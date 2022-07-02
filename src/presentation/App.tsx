import React from 'react';
import Button from '@shiba/Button';
import Loading from '@shiba/Loading';
import Header from '../common/components/Header';

const App = () => {
    return (
        <div className="test">
            <Header />
            <Button variant="warning">
                <span>Hello</span>
            </Button>
            <Loading />
        </div>
    );
};

export default App;
