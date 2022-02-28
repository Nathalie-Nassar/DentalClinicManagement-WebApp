export default function AddEmployee() {
    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5" style={{ "width": "100%", "alignItems": "center" }}>
                <div className="row gx-5" style={{ "margin": "auto" }}>
                    <div className="col-lg-6" style={{ "width": "70%", "margin": "auto" }}>
                        <div className="bg-white text-center rounded p-5">
                            <h1 className="mb-4">New Patient Enrollment</h1>
                            <br />
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Patient First Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="First Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Patient Last Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Last Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Patient Email</label>
                                        <input type="email" className="form-control bg-light border-0" placeholder="Email" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="myfile"> Sex</label>
                                        <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                            <option selected>Select Sex</option>
                                            <option value="Broken Tooth"> Female </option>
                                            <option value="Brushing"> Male </option>
                                            <option value="Check-Up"> N/A </option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <label for="date"> Patient Birthdate</label>
                                            <input type="date" value="2017-06-01" className="form-control bg-light border-0 datetimepicker-input" data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Weight (Kilograms)</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Weight" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Height (Centimeters)</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Height" style={{ height: '55px' }} />
                                    </div>


                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Address</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Address" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="myfile"> Martial Status</label>
                                        <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                            <option selected>Select Sex</option>
                                            <option value="Broken Tooth"> Single </option>
                                            <option value="Brushing"> Married </option>
                                            <option value="Check-Up"> Divorced </option>
                                            <option value="Brushing"> Legaly separated </option>
                                            <option value="Check-Up"> Widowed </option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br /> <br />
                                        <label for="date" style={{ "float": "left" }}> Taking any medications, currently?</label><br /> <br />
                                        <div style={{ "float": "left" }}>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html"  >Yes</label> <br />
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html"  >No</label> <br />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br /> <br />
                                        <label for="myfile"> If yes, list them</label>
                                        <textarea rows="4" cols="80" className="form-control bg-light border-0">
                                            Medicaments List
                                        </textarea>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br /> <br />
                                        <label for="date" style={{ "float": "left" }}> Having allergies?</label><br /> <br />
                                        <div style={{ "float": "left" }}>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html"  >Yes</label> <br />
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html"  >No</label> <br />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <br /> <br />
                                        <label for="myfile"> If yes, list them</label>
                                        <textarea rows="4" cols="80" className="form-control bg-light border-0">
                                            Allergies List
                                        </textarea>
                                    </div>
                                </div>
                            </form>
                            <br /><br /><br /><br />


                            <h2 className="mb-4">In Case of Emergency</h2>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Emergency Contact First Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="First Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Emergency Contact Last Name</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Last Name" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Relationship</label>
                                        <input type="text" className="form-control bg-light border-0" placeholder="Relationship" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label for="date"> Contact Number</label>
                                        <input type="tel" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control bg-light border-0" style={{ height: '55px' }} />
                                    </div>
                                </div>
                            </form>
                            <div className="col-12" style={{ "width": "80%", "margin": "auto" }}>
                                <br /><br /><br />
                                <button className="btn btn-primary w-100 py-3" type="submit">Add Patient</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}