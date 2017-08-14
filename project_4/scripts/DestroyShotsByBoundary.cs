// Copyright 2016 Cameron Iverson

// TO DO:
// resize boundary to destroy bullets once they reach the sides of the player view - DONE (?)

using UnityEngine;
using System.Collections;

public class DestroyShotsByBoundary : MonoBehaviour
{
	void OnTriggerExit2D(Collider2D other)
	{
		if (other.gameObject.tag == "Bullet")
		Destroy(other.gameObject);
	}
}
