"""
Backend API Tests for ServicePlyus
Tests: Lead API, Status API, Root endpoint
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestRootEndpoint:
    """Test root API endpoint"""
    
    def test_root_returns_hello_world(self):
        """Test that root endpoint returns Hello World"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"


class TestLeadAPI:
    """Test Lead submission API with Telegram integration"""
    
    def test_lead_submission_success(self):
        """Test successful lead submission"""
        payload = {
            "name": "TEST_User",
            "phone": "+998901234567",
            "service_type": "diagnostika",
            "message": "Test message for API testing"
        }
        response = requests.post(f"{BASE_URL}/api/lead", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert "success" in data
        assert data["success"] == True
        assert "message" in data
    
    def test_lead_submission_minimal_data(self):
        """Test lead submission with only required fields"""
        payload = {
            "name": "TEST_MinimalUser",
            "phone": "+998901234567"
        }
        response = requests.post(f"{BASE_URL}/api/lead", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
    
    def test_lead_submission_with_all_fields(self):
        """Test lead submission with all optional fields"""
        payload = {
            "name": "TEST_FullUser",
            "phone": "+998901234567",
            "service_type": "tozalash",
            "message": "Full test with all fields"
        }
        response = requests.post(f"{BASE_URL}/api/lead", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
    
    def test_lead_submission_missing_name(self):
        """Test lead submission without name - should fail validation"""
        payload = {
            "phone": "+998901234567"
        }
        response = requests.post(f"{BASE_URL}/api/lead", json=payload)
        
        # FastAPI returns 422 for validation errors
        assert response.status_code == 422
    
    def test_lead_submission_missing_phone(self):
        """Test lead submission without phone - should fail validation"""
        payload = {
            "name": "TEST_NoPhone"
        }
        response = requests.post(f"{BASE_URL}/api/lead", json=payload)
        
        # FastAPI returns 422 for validation errors
        assert response.status_code == 422


class TestStatusAPI:
    """Test Status check API"""
    
    def test_create_status_check(self):
        """Test creating a status check"""
        payload = {
            "client_name": "TEST_StatusClient"
        }
        response = requests.post(f"{BASE_URL}/api/status", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert "client_name" in data
        assert data["client_name"] == "TEST_StatusClient"
        assert "timestamp" in data
    
    def test_get_status_checks(self):
        """Test retrieving status checks"""
        response = requests.get(f"{BASE_URL}/api/status")
        
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)


class TestServiceTypes:
    """Test lead submission with different service types"""
    
    @pytest.mark.parametrize("service_type", [
        "diagnostika",
        "tozalash", 
        "uch-klapan",
        "turbina",
        "issiqlik-almashgich",
        "bosim-sensori",
        "manostat",
        "shoshilinch"
    ])
    def test_lead_with_service_types(self, service_type):
        """Test lead submission with each service type"""
        payload = {
            "name": f"TEST_Service_{service_type}",
            "phone": "+998901234567",
            "service_type": service_type
        }
        response = requests.post(f"{BASE_URL}/api/lead", json=payload)
        
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
