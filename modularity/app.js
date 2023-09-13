<div id='parent'>
    <div id='child'>
        <h1 id='content'>Hello From React</h1>
    </div>
</div>
let greeting = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        React.createElement('h1', { id: 'content' }),
        'Hello From React'
    )
);

console.log(greeting);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(greeting);
