import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const LatestActivites = () => {
	return (
		<div className="latest-area">
			<div className="areaInfo-container">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-8 col-md-10">
							<div className="info-area">
								<h5 class="title2">List of Raffles</h5>
								<h2 class="title">Latest Raffles</h2>
								<p class="text">
									The world's first truly fair and global choice, Each player
									has the highest chance to win the JACKPOT
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
						<div className="areabutton-container justify-content-center">
				<div class="container justify-content-center">
					<div class="row ">
						<div class="col-lg-5 col-md-12 ">
							<div class="single-button">
								<a
									href="#"
									class="btnsi"
									data-bs-toggle="modal" data-bs-target="#exampleModal"
								>

									Purchased Choice
								</a>
							</div>

							{/* Modal 1*/}
							
							<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div class="modal-dialog modal-dialog-centered modal-lg">
									<div class="modal-content">										
										<div class="modal-body">
											<div className="botonClose ">
												<button type="button" class="btnC " data-bs-dismiss="modal" aria-label="Close">
													X
												</button>
											</div>
											
											<div className="btnsi"  >
												<h1 style={{ 'font-size': '5vw'}}>winner</h1>
											</div>  
										</div>
										
									</div>
								</div>
							</div>
							
						</div>
						<div class="col-lg-4 col-md-12 modaltryagain">
							<div class="single-button">
								<a
									href="#"
									class="btnsi"
									data-bs-toggle="modal" data-bs-target="#exampleModal2"
								>

									My Choice
								</a>
							</div>
							{/* Modal 2*/}
							
							<div class="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div class="modal-dialog modal-dialog-centered modal-lg">
									<div class="modal-content">										
										<div class="modal-body ">
											<div className="botonClose ">
												<button type="button" class="btnC " data-bs-dismiss="modal" aria-label="Close">
													X
												</button>
											</div>
											
											<div className="btnsi"  >
												<h1 style={{ 'font-size': '5vw'}}>Try Again</h1>
											</div>  
										</div>
										
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-12">
							<div class="single-button">
								<a
									href="#"
									class="btnsi"
									data-toggle="modal"
									data-target="#signin"
								>

									History
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div class="table-responsive">
					<table class="table table-activities">
						<thead class="table-secolor">
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Raffle ID</th>
								<th scope="col">CHOICE</th>
							</tr>
						</thead>
						<tbody>
							<tr>

								<td>
									30/09/2022
								</td>
								<td>
									FY-01
								</td>
								<td> <a  href="#" class="btnsi ml-auto"  data-toggle="modal"> Enter Raffle</a></td>
							</tr>
								<tr>

								<td>
									30/09/2022
								</td>
								<td>
									FY-01
								</td>
								<td> <a  href="#" class="btnsi ml-auto"  data-toggle="modal"> Enter Raffle</a></td>
							</tr>
								<tr>

								<td>
									30/09/2022
								</td>
								<td>
									FY-01
								</td>
								<td> <a  href="#" class="btnsi ml-auto"  data-toggle="modal"> Enter Raffle</a></td>
							</tr>
								<tr>

								<td>
									30/09/2022
								</td>
								<td>
									FY-01
								</td>
								<td> <a  href="#" class="btnsi ml-auto"  data-toggle="modal"> Enter Raffle</a></td>
							</tr>
								<tr>

								<td>
									30/09/2022
								</td>
								<td>
									FY-01
								</td>
								<td> <a  href="#" class="btnsi ml-auto"  data-toggle="modal"> Enter Raffle</a></td>
							</tr>
								<tr>

								<td>
									30/09/2022
								</td>
								<td>
									FY-01
								</td>
								<td> <a  href="#" class="btnsi ml-auto"  data-toggle="modal"> Enter Raffle</a></td>
							</tr>
						
						</tbody>
					</table>
				</div>
			</div>


		<div className="attribution">
				<a target="_blank" rel="noopener noreferrer" href="https://api3.org/qrng">
					<img src="https://api3.org/img/quantum-random-numbers/embed-badges/Type=Black, Size=Medium.png" width="190" height="80" />
				</a>
			</div>
		</div>
	);
};

export default LatestActivites;
