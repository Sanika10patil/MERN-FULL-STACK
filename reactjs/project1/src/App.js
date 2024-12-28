import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div>
       <Header First="Home" Second="about" third="contact" fourth="profile"/>
          <div className="container">
    <div className="form-container">
        <h1> College Admission Form</h1>
<table>
    <thead>
        <tr>
              <th>
                Name
              </th>
              <th>
                Email id
              </th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>sanika</td>
                    <td>sanikapatil550@gmail.com</td>
                </tr>
                <tr>
                    <td>aaru</td>
                    <td>aarukadam145@gmail.com</td>
                </tr>
                <tr>
                    <td>rugved</td>
                    <td>rugvedkadam21@gmail.com</td>
                </tr>
                <tr>
                    <td>ashvini</td>
                    <td>ashvinikadam42@gmail.com</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="table-container">
        <h1> Student List</h1>
<input type="text" placeholder="Full Name"/>
<input type="password" placeholder="Password"/>
<input type="email" placeholder="Email"/>
<input type="Mobile" placeholder="Monile"/>
<br/>
<button>Save</button>
</div>
</div>
    </div>
  );
  
  }

export default App;
