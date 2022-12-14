// *** function component ***
import React, { memo } from 'react';

const HabbitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-from" onSubmit={onSubmit}>
            <input 
                ref={inputRef}
                type="text" 
                className='add-input' 
                placeholder='Habit' />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabbitAddForm;





// *** class component ***
// import React, { PureComponent } from 'react';
// class HabbitAddForm extends PureComponent {
//     formRef = React.createRef();
//     inputRef = React.createRef();

//     onSubmit = event => {
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         // this.inputRef.current.value = '';
//         this.formRef.current.reset();
//     };
    
//     render() {
//         console.log('habitAddForm');
//         return (
//             <form ref={this.formRef} className="add-from" onSubmit={this.onSubmit}>
//                 <input 
//                     ref={this.inputRef}
//                     type="text" 
//                     className='add-input' 
//                     placeholder='Habit' />
//                 <button className="add-button">Add</button>
//             </form>
//         );
//     }
// }

// export default HabbitAddForm;