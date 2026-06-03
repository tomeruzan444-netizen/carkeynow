<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://carkeynow.co.il');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$to      = 'tomeruzan444@gmail.com';
$name    = htmlspecialchars(trim($_POST['name']    ?? ''));
$phone   = htmlspecialchars(trim($_POST['phone']   ?? ''));
$city    = htmlspecialchars(trim($_POST['city']    ?? ''));
$service = htmlspecialchars(trim($_POST['service'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

$subject = "פנייה חדשה מהאתר - {$name}";

$body  = "פנייה חדשה מאתר מפתח עכשיו\n";
$body .= "================================\n\n";
$body .= "שם: {$name}\n";
$body .= "טלפון: {$phone}\n";
if ($city)    $body .= "עיר: {$city}\n";
if ($service) $body .= "שירות: {$service}\n";
if ($message) $body .= "הודעה: {$message}\n";
$body .= "\n--------------------------------\n";
$body .= "נשלח מ: " . ($_SERVER['HTTP_REFERER'] ?? 'לא ידוע') . "\n";
$body .= "זמן: " . date('d/m/Y H:i:s') . "\n";

$headers  = "From: noreply@carkeynow.co.il\r\n";
$headers .= "Reply-To: noreply@carkeynow.co.il\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'תודה! נחזור אליכם בהקדם.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'שגיאה בשליחה. אנא התקשרו אלינו ישירות.']);
}
