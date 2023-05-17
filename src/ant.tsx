import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Ant = () => {
    const [visible, setVisible] = useState(true);
    return <div>
        <Button>测试</Button>
        <Modal visible={visible} onCancel={() => setVisible(false)}>
            zzp
        </Modal>
    </div>
}

export default Ant;
