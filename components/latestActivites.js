import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { firestoreClient } from "../utils/queries";

const LatestActivites = () => {
	const [latestMinted, setLatestMinted] = useState([]);
	const [networkName, setNetworkName] = useState('polygon');

	const networkshandler = ['polygon', 'optimism', 'arbitrum'];
	const chainimage = {
		polygon:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_polygon.jpg&w=32&q=75',
		arbitrum:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_arbitrum.jpg&w=32&q=75',
		optimism:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_optimism.jpg&w=32&q=75'
	}	


	//Async function to fetch the latest minted
	const fetchLatestMinted = async () => {
		//Fetch the latest minted from the collection metadata
	
		const query = await firestoreClient.collection('metadata').limit(20);
		const queryOutput = [];

		query.onSnapshot((snapshot) => {
			snapshot.forEach((doc) => {
				//Set the latest minted with the data from the query and the id
				console.log("DATA", doc.data());
				queryOutput.push({ id: doc.id, ...doc.data() });
			});
			setLatestMinted(queryOutput);
		});
		//Set the latest minted with the data from the query

	};
	//useEffect asynchronus function to fetch the latest minted
	useEffect(() => {
		fetchLatestMinted();
		setNetworkName(getNetworkName(localStorage.getItem("networkId")));
	}, []);

	/**
	 * Function to get the network name from the network id
	 */
	const getNetworkName = (networkId) => {
		switch (networkId) {
			case '137':
				return 'polygon';
			case '42161':
				return 'arbitrum';
			case '10':
				return 'optimism';
			default:
				return 'polygon';
		}
	}

	/**
     * Function to shorten the address
     * 0x61A8E99597725D76e17DaAFB293734dC0Aa7eBf5 to 0x61A8...7eBf5
     */
    const shortenAddress = (address) => {
        if (address) {
            return address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length);
        }
    }

	//Render the latest minted
	const renderLatestMinted = () => {
		console.log(latestMinted);
		const arr = latestMinted[4]
		console.log(arr)
		console.log(arr.id);
		
		//For each in the networkshandler array
		networkshandler.forEach(item => {
			//If the latest minted has the network name
			if (arr[item]) {
				//Return the network name
				console.log("INSIDE",arr[item][0].id);
			}
		});
	};

	//Get how long ago the latest minted was minted from the timestamp
	const getTimeAgo = (timestamp) => {
		const date = new Date(timestamp.toDate());
		const seconds = Math.floor((new Date() - date) / 1000);
		let interval = Math.floor(seconds / 31536000);
		if (interval > 1) {
			return interval + " years ago";
		}
		interval = Math.floor(seconds / 2592000);
		if (interval > 1) {
			return interval + " months ago";
		}
		interval = Math.floor(seconds / 86400);
		if (interval > 1) {
			return interval + " days ago";
		}
		interval = Math.floor(seconds / 3600);
		if (interval > 1) {
			return interval + " hours ago";
		}
		interval = Math.floor(seconds / 60);
		if (interval > 1) {
			return interval + " minutes ago";
		}
		return Math.floor(seconds) + " seconds ago";
	};



	return (
		<div className="latest-area">
			<div className="areaInfo-container">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-8 col-md-10">
							<div className="info-area">
								<h5 class="title2" onClick={renderLatestMinted}>Daily Choice</h5>
								<h2 class="title">Latest Activites</h2>
								<p class="text">
									The world's first truly fair and global choice, Each player
									has the highest chance to win the price, powered by QRNG
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="areabutton-container justify-content-center">
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
			</div> */}

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
								{/* <th scope="col">URI</th> */}

							</tr>
						</thead>
						<tbody>
							{latestMinted.map((metadata,i) => (
								<>
									{metadata['polygon'].map((item, i) => (
										<tr key={i}>
											<td>{shortenAddress(metadata.id)}</td>
											<td><img src={chainimage[networkName]} className='chainimg'/>{networkName}</td>
											<td>{item.id}</td>
											<td>{getTimeAgo(item.minted)}</td>
											{/* <td>{item.uri}</td> */}
										</tr>	
									))}
								</>
							))}
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
