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
								<h5 class="title2">Daily Choice</h5>
								<h2 class="title">Latest Activites</h2>
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
									data-toggle="modal"
									data-target="#signin"
								>
									{" "}
									Purchased Choice
								</a>
							</div>
						</div>
						<div class="col-lg-4 col-md-12">
							<div class="single-button">
								<a
									href="#"
									class="btnsi"
									data-toggle="modal"
									data-target="#signin"
								>
									{" "}
									My Choice
								</a>
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
									{" "}
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
					{/* TODO: ADD NETWORKS LOGO*/}

						<thead class="table-secolor">
							<tr>
								<th scope="col">Address</th>
								<th scope="col">Network</th>
								<th scope="col">ID</th>
								<th scope="col">Time</th>

							</tr>
						</thead>
						<tbody>
							<tr>

								<td>
									0X0SXS...12312
								</td>
								<td>
									polygon
								</td>
								<td>TXT321</td>
								<td>12:00:00</td>
							</tr>
							<tr>

								<td>
									0X0SXS...12312
								</td>
								<td>
									polygon
								</td>
								<td>TXT321</td>
								<td>12:00:00</td>
							</tr>
							<tr>

								<td>
									0X0SXS...12312
								</td>
								<td>
									polygon
								</td>
								<td>TXT321</td>
								<td>12:00:00</td>
							</tr>
							<tr>

								<td>
									0X0SXS...12312
								</td>
								<td>
									polygon
								</td>
								<td>TXT321</td>
								<td>12:00:00</td>
							</tr>
							<tr>

								<td>
									0X0SXS...12312
								</td>
								<td>
									polygon
								</td>
								<td>TXT321</td>
								<td>12:00:00</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>

		<div className="attribution">
				<a target="_blank" rel="noopener noreferrer" href="https://api3.org/qrng">
					<img src="images/banner/banner-qrng1.png" width="100" height="65" />	
				</a>
			</div>
		</div>
		
	);
};

export default LatestActivites;
