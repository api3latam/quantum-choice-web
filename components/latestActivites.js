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
						<thead class="table-secolor">
							<tr>
								<th scope="col">User</th>
								<th scope="col">Choice Number</th>
								<th scope="col">Choice</th>
							</tr>
						</thead>
						<tbody>
							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>
							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>
							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>

							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>
							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>
							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>
							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>
							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>
							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>

							<tr>

								<td>
									<img src="/images/banner/images1.png" alt="" />
									Tom Siuu
								</td>
								<td>
									<ul class="number-list">
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
										<li>24</li>
									</ul>
								</td>
								<td>01</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>




		</div>
	);
};

export default LatestActivites;
